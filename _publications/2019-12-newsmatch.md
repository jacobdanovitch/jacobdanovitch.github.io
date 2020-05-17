---
title: "Linking Social Media Posts to News with Siamese Transformers"
excerpt: "We design an efficient Siamese architecture to minimize the distance between embeddings of articles and their comments."
collection: publications
permalink: /publications/newslinking
paperurl: "https://arxiv.org/abs/2001.03303"
date: 2020-01-10
venue: "NLCA"
citation: "Danovitch, J. (2019). <i>Linking Social Media Posts to News with Siamese Transformers.</i>  International Conference on Natural Language Computing Advances (NLCA), Vancouver, CA."
bibtex: "@misc{danovitch2020linking,\n
    title={Linking Social Media Posts to News with Siamese Transformers},\n
    author={Jacob Danovitch},\n
    year={2020},\n
    eprint={2001.03303},\n
    archivePrefix={arXiv},\n
    primaryClass={cs.IR}\n
}"
repo: "https://github.com/jacobdanovitch/jdnlp"
---

Many computational social science projects examine online discourse surrounding a specific event, such as natural disasters, sporting matches, and political events.  A costly bottleneck in this work is collecting relevant social media posts. Normally, an initial corpus would be collected using a high-recall, low-precision keyword search, and filtered manually by human judges.

We design an efficient Siamese architecture to minimize the distance between embeddings of articles and their comments. By allowing researchers to automatically filter corpora using comments most similar to news articles describing the event of interest, this approach can greatly mitigate time and money spent on manual annotation.