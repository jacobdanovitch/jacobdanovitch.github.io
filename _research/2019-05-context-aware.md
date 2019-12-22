---
title: "Compositional Attention Networks for Context-Aware Text Classification"
excerpt: "We present an approach to leveraging context for text classification tasks using the Compositional Attention Network."
collection: research
permalink: /research/context-aware
citation: "Danovitch, J., & SalahEldeen, H. (2019). <i>Compositional Attention Networks for Context-Aware Text Classification.</i> Submitted to ACL 2020, Seattle, USA."
---

Supervised by: [Hany SalahEldeen](https://scholar.google.com/citations?user=XpmZBggAAAAJ&hl=en)

Natural language is often ambiguous, which makes it challenging to correctly interpret. A variety of natural language processing (NLP) systems, especially those in a conversational setting like question answering models and dialogue agents, require additional information or background knowledge. Similar challenges are often found in text classification tasks. The rise of social media platforms has given rise to many such tasks like emotion recognition, offensive content detection, and sarcasm detection. However, online conversations on social media are very short and sparse in content, which leads to challenges for modern NLP models. Even human annotators are frequently
unable to correctly identify sarcasm without contextual clues. This suggests that performance on these tasks would benefit from the context of the preceding turns of dialog.

We present an approach to leveraging context for text classification tasks using the Compositional Attention Network. We demonstrate the general applicability of this architecture as an augmentation for any traditional sequence encoder. We find that the use of MAC (Memory, Attention, Composition) cells, which perform sequential multi-hop reasoning using attention, leads to significant performance improvements when incorporating prior turns of conversation.

<i class='small' style='/*font-size: small*/'>Work primarily completed during internship at Microsoft.</i>