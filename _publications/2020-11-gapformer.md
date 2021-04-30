---
title: "ComplexDataLab at W-NUT 2020 Task 2: Detecting Informative COVID-19 Tweets by Attending over Linked Documents"
excerpt: "We present Gapformer, which effectively classifies content as informative or not. It reformulates the problem as graph classification, drawing on not only the tweet but connected webpages and entities."
collection: publications
permalink: /publications/gapformer
paperurl: "https://www.aclweb.org/anthology/2020.wnut-1.63/"
date: 2020-11-19
venue: "EMNLP | WNUT"
citation: "Pelrine, Kellin, et al. <i>ComplexDataLab at W-NUT 2020 Task 2: Detecting Informative COVID-19 Tweets by Attending over Linked Documents.</i>Proceedings of the Sixth Workshop on Noisy User-generated Text (W-NUT 2020). 2020."
bibtex: '@inproceedings{pelrine-etal-2020-complexdatalab,
    title = "{C}omplex{D}ata{L}ab at {W}-{NUT} 2020 Task 2: Detecting Informative {COVID}-19 Tweets by Attending over Linked Documents",
    author = "Pelrine, Kellin  and
      Danovitch, Jacob  and
      Camacho, Albert Orozco  and
      Rabbany, Reihaneh",
    booktitle = "Proceedings of the Sixth Workshop on Noisy User-generated Text (W-NUT 2020)",
    month = nov,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.wnut-1.63",
    doi = "10.18653/v1/2020.wnut-1.63",
    pages = "434--439",
    abstract = "Given the global scale of COVID-19 and the flood of social media content related to it, how can we find informative discussions? We present Gapformer, which effectively classifies content as informative or not. It reformulates the problem as graph classification, drawing on not only the tweet but connected webpages and entities. We leverage a pre-trained language model as well as the connections between nodes to learn a pooled representation for each document network. We show it outperforms several competitive baselines and present ablation studies supporting the benefit of the linked information. Code is available on Github.",
}'
---

Given the global scale of COVID-19 and the flood of social media content related to it, how can we find informative discussions? We present Gapformer, which effectively classifies content as informative or not. It reformulates the problem as graph classification, drawing on not only the tweet but connected webpages and entities. We leverage a pre-trained language model as well as the connections between nodes to learn a pooled representation for each document network. We show it outperforms several competitive baselines and present ablation studies supporting the benefit of the linked information.