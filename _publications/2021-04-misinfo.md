---
title: "The Surprising Performance of Simple Baselines for Misinformation Detection"
excerpt: "We examine the performance of a broad set of modern transformer-based language models and show that with basic fine-tuning, these models are competitive with and can even significantly outperform recently proposed state-of-the-art methods"
collection: publications
permalink: /publications/misinfo
paperurl: "https://arxiv.org/abs/2104.06952"
date: 2021-04-14
venue: "TheWebConf"
citation: "Pelrine, Kellin, Jacob Danovitch, and Reihaneh Rabbany. <i>The Surprising Performance of Simple Baselines for Misinformation Detection.</i> arXiv preprint arXiv:2104.06952 (2021)."
bibtex: '@article{pelrine2021surprising,
  title={The Surprising Performance of Simple Baselines for Misinformation Detection},
  author={Pelrine, Kellin and Danovitch, Jacob and Rabbany, Reihaneh},
  journal={arXiv preprint arXiv:2104.06952},
  year={2021}
}'
repo: "https://github.com/ComplexData-MILA/misinfo-baselines"
---

As social media becomes increasingly prominent in our day to day lives, it is increasingly important to detect informative content and prevent the spread of disinformation and unverified rumours. While many sophisticated and successful models have been proposed in the literature, they are often compared with older NLP baselines such as SVMs, CNNs, and LSTMs. In this paper, we examine the performance of a broad set of modern transformer-based language models and show that with basic fine-tuning, these models are competitive with and can even significantly outperform recently proposed state-of-the-art methods. We present our framework as a baseline for creating and evaluating new methods for misinformation detection. We further study a comprehensive set of benchmark datasets, and discuss potential data leakage and the need for careful design of the experiments and understanding of datasets to account for confounding variables. As an extreme case example, we show that classifying only based on the first three digits of tweet ids, which contain information on the date, gives state-of-the-art performance on a commonly used benchmark dataset for fake news detection --Twitter16. We provide a simple tool to detect this problem and suggest steps to mitigate it in future datasets.