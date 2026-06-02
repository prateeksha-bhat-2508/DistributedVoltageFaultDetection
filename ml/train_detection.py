import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

df = pd.read_csv("../dataset/detect_dataset.csv")

df = df.drop(columns=["Unnamed: 7", "Unnamed: 8"])

X = df[["Ia","Ib","Ic","Va","Vb","Vc"]]
y = df["Output (S)"]

X_train, X_test, y_train, y_test = train_test_split(
    X,y,test_size=0.2,random_state=42
)

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train,y_train)

pred = model.predict(X_test)

acc = accuracy_score(y_test,pred)

print("Accuracy:",acc)
print(classification_report(y_test,pred))

joblib.dump(model,"../models/fault_detection_model.pkl")