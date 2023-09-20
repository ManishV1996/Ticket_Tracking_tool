import React, { useState } from "react";
import UserQueryForm from "./component/UserQueryForm";
import QueryReceived from "./component/QueryReceived";
import QueryProcessing from "./component/QueryProcessing";
import QueryComplete from "./component/QueryComplete";
import SuccessMessage from "./component/SuccessMessage";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [query, setQuery] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleQuerySubmit = (queryData) => {
    setQuery(queryData);
    setCurrentStep(1);
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleResolveClick = () => {
    setCurrentStep(3);
  };

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleDoneClick = () => {
    setCurrentStep(0);
    localStorage.setItem("query", JSON.stringify(query));
    setQuery(null);
    setShowSuccessMessage(true);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <UserQueryForm onSubmit={handleQuerySubmit} />;
      case 1:
        return (
          <QueryReceived
            query={query}
            onNext={handleNextClick}
            onBack={handleBackClick}
          />
        );
      case 2:
        return (
          <QueryProcessing
            query={query}
            onResolve={handleResolveClick}
            onBack={handleBackClick}
          />
        );
      case 3:
        return (
          <QueryComplete
            query={query}
            onDone={handleDoneClick}
            onBack={handleBackClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
    <NavBar/>
    <Header/>
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-body">{renderCurrentStep()}</div>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <SuccessMessage onClose={() => setShowSuccessMessage(false)} />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default App;
