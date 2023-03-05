from config import *
import gzip
import matplotlib.pyplot as plt
import numpy as np 
import pandas as pd


def load_imgs(dpath, len=731668): # 731,668 samples in the training set
  f_data = gzip.open(dpath, "rb")

  image_size = 28
  num_images = len

  f_data.read(16)
  buf = f_data.read(image_size * image_size * num_images)
  data = np.frombuffer(buf, dtype=np.uint8).astype(np.float32)
  data = data.reshape(num_images, image_size, image_size)

  # print(data[0]) 

  """ 
  for i in range(0, 20):
    plt.imshow(data[i])
    plt.savefig(f"images/image{i}.png")
    plt.tick_params(bottom = False, left = False)
    #plt.title()
  """ 
    
  df = pd.DataFrame(data[0])
  # print(data[0])
  return df

def load_labs(dpath, size=731668): 
  f = gzip.open(dpath,'rb')

  f.read(8)
  for i in range(0,size):   
    buf = f.read(1)
    labels = np.frombuffer(buf, dtype=np.uint8).astype(np.int64)
    # print(labels)
  return labels 

def save_images(x, y): 
  print(x.head(n=27))  
  # print(y[0])


def main():

  plt.interactive(True)

  n_samples = 20

  x_train = load_imgs(DATA_PATH + TRAIN_X_FILE, n_samples) # 731,668 images in the training set
  y_train = load_labs(DATA_PATH + TRAIN_Y_FILE, n_samples)

  save_images(x_train, y_train)

if __name__ == "__main__":
    main()