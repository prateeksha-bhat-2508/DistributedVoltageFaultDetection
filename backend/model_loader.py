import joblib

detect_model = joblib.load("../models/fault_detection_model.pkl")
classify_model = joblib.load("../models/fault_classifier_model.pkl")