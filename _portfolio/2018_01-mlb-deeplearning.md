---
title: "Deep Neural Networks for Baseball"
excerpt: "Following along with Andrew Trask's \"Grokking Deep Learning\" by modelling baseball statistics using various architectures of neural networks built from scratch."
collection: portfolio
---

Github: [jacobdanovitch/Deep-Neural-Networks-for-Baseball](https://github.com/jacobdanovitch/Deep-Neural-Networks-for-Baseball)

In reading [Andrew Trask's "Grokking Deep Learning"](https://www.manning.com/books/grokking-deep-learning), I've tried to hold myself accountable to learning the material by implementing it from scratch in creative ways. To do so, I've started this project that attempts to use different forms of neural network architecture to predict baseball statistics. Starting basic with predicting a pitcher's ERA using very basic inputs to get my bearings, I aim to eventually progress to much more sophisticated metrics.

## How it works

* `/FIP/FIPGradientDescent.py`: Modelling ERA using basic inputs with simple linear regression by gradient descent
* `/FIP/FIPNN.py`: Modelling ERA using basic inputs with a neural network containing a hidden layer
* `/FIP/FIP-DNN.py`: Modelling ERA using an arbitrarily wide deep neural network

## What I Learned

I learned about different architectures of neural networks, the theories behind learning, and started to grasp the intuition behind backpropagation as credit assignment.

## Future Plans

* Keep learning new models! 
* Use more sophisticated inputs and outputs, nested models

## Current (Known) Problems

* `/FIP/FIP-DNN.py`: NeuralNetwork.fit() doesn't work

### Built With

* **Python** - Pandas, numpy