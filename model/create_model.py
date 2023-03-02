# create + save model
# save models in folder saved_models 

# Imports 
import matplotlib.pyplot as plt
%matplotlib inline
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split

import keras
from keras.datasets import mnist
from keras import models
from keras.layers import Dense, Input, Conv2D, MaxPooling2D, Dropout, Flatten, BatchNormalization
from keras import backend as k

"""
Create the following: 
x_traina
x_test
x_val

y_train
y_test
y_val
https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html


"""

