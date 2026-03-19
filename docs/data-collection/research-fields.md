# Research Fields

This page describes how a research field was assigned to each dataset in the Scholar Data corpus. Field assignments are used to compute normalization factors that make D-index and S-index scores comparable across disciplines.

## Approach

Each dataset was assigned a research field using the [OpenAlex topics and domains classification](https://docs.openalex.org/api-entities/topics), which is a four-level taxonomy comprising 4,516 topics grouped into 252 subfields, 26 fields, and 4 top-level domains. The subfields, fields, and domains follow [Scopus's ASJC structure](https://service.elsevier.com/app/answers/detail/a_id/15181/).

The top-level domains and fields are too broad for field-specific normalization since data sharing and reuse practices vary significantly at finer granularity of research communities. After analyzing dataset coverage at both the topic (4,516) and subfield (252) levels, the **subfield level** was selected as the most suitable classification for normalization. Topic-level classification was found to be too granular, with insufficient dataset coverage per topic.

## Assigning Research Fields

### OpenAlex Classifications

Where available, the primary topic and associated subfield assigned by OpenAlex were used directly. OpenAlex uses an LLM-based approach to assign topics to indexed works, incorporating both metadata and the reference network of each work, and provides a confidence score for each classification.

### Custom Topic Classifier

Not all datasets in the corpus are indexed in OpenAlex. For those without an OpenAlex assignment, a custom high-speed topic classifier was developed to map dataset metadata to the OpenAlex topics taxonomy. Here are key details:

- **Base model**: a fine-tuned distilled static embedding model ([Model2Vec potion-base-32M](https://huggingface.co/minishlab/potion-base-32M)), chosen for its inference speed of 48,000+ records/second on CPU
- **Training data**: 10,000 English-language DataCite records with ground truth topic classifications derived from OpenAlex; 8,636 records used for training (80% split), 30 epochs, 1,135 unique topics
- **Input**: title, description (up to 1,000 characters), and keywords combined into an embedding vector, matched against pre-computed topic embeddings using approximate nearest neighbors
- **Confidence**: cosine similarity score used as the confidence measure

More details are available in the dedicated [GitHub repository](https://github.com/data-S-index/dataset-to-field).

### Classification Strategy

The final topic and subfield assigned to each dataset was determined as follows:

1. **OpenAlex confidence ≥ 0.5**: the OpenAlex assignment was used, even if the custom model had a higher score. At this confidence level, OpenAlex's use of reference network signals makes it likely more accurate than a metadata-only classifier.
2. **OpenAlex confidence < 0.5**: the assignment with the higher confidence score between OpenAlex and the custom model was retained. Below 0.5, OpenAlex assignments were observed to be unreliable. For example, the MIMIC-IV v3.1 dataset was assigned "Legal and Regulatory Analysis / Transportation" by OpenAlex with a confidence of 0.16, while the custom model assigned "Family and Patient Care in Intensive Care Units / Radiological and Ultrasound Technology" with a confidence of 0.47, which is a clearly more representative classification.
3. **Not indexed in OpenAlex**: the custom model's assignment was used regardless of score, to maximize field coverage across the corpus.
4. **Non-Latin script metadata, not in OpenAlex**: 16,700 datasets with metadata in non-Latin languages could not be classified by the current model and were left unassigned.

All final topic and subfield classifications were saved in an NDJSON file.

## Results

| Source    | Topic in OpenAlex | Topic from model | Topic retained from OpenAlex | Topic retained from model | Total assigned |
| --------- | ----------------- | ---------------- | ---------------------------- | ------------------------- | -------------- |
| DataCite  | 15,324,819        | 48,983,961       | 7,394,117                    | 41,598,712                | 48,992,829     |
| EMDB      | 0                 | 51,645           | 0                            | 51,645                    | 51,645         |
| **Total** | **15,324,819**    | **49,035,606**   | **7,394,117**                | **41,650,357**            | **49,044,474** |
