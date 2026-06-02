import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

df = pd.read_csv("../dataset/classData.csv")

df["FaultType"] = (
    df["G"].astype(str)
    + df["C"].astype(str)
    + df["B"].astype(str)
    + df["A"].astype(str)
)

mapping = {
    "0000":"No Fault",
    "1001":"LG Fault",
    "0110":"LL Fault",
    "1011":"LLG Fault",
    "0111":"LLL Fault",
    "1111":"LLLG Fault"
}

df["FaultType"] = df["FaultType"].map(mapping)

X = df[["Ia","Ib","Ic","Va","Vb","Vc"]]
y = df["FaultType"]

X_train,X_test,y_train,y_test = train_test_split(
    X,y,test_size=0.2,random_state=42
)

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

model.fit(X_train,y_train)

pred = model.predict(X_test)

print("Accuracy:",accuracy_score(y_test,pred))

joblib.dump(model,"../models/fault_classifier_model.pkl")