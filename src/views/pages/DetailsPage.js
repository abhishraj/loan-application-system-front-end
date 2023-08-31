import React, { useState, useEffect } from "react";
import "../../css/detailspage.css";
import SingleSelect from "../components/SingleSelect";
import Axios from "axios";

const DetailsPage = () => {
    const [setupData, setSetupData] = useState();
    const [businessName, setBusinessName] = useState();
    const [yearEstablished, setYearEstablished] = useState();
    const [balanceSheet, setBalanceSheet] = useState(false);
    const [loanAmount, setLoanAmount] = useState();
    const [accountantProvider, setAccountantProvider] = useState();
    const [finalDecisionMessage, setFinalDecisionMessage] = useState(false);

    const dataInitialization = async () => {
        try {
            // const url = `http://localhost:3001/master/initiate-app`;
            // const response = await Axios.get(url);
            // const initialData = response.data;
            const initialData = {accountProviders: [
                {
                    key: 1,
                    value: "Xero"
                },
                {
                    key: 2,
                    value: "MYOB"
                }
            ]};
            setSetupData(initialData);
        } catch (exception) {
            console.log(exception);
        }
    }

    const handleNameChange = (event) => {
        setBusinessName(event.target.value);
        event.preventDefault();
        event.stopPropagation();
    }

    const handleYear = (event) => {
        setYearEstablished(event.target.value);
        event.preventDefault();
        event.stopPropagation();
    }

    const handleLoanAmount = (event) => {
        setLoanAmount(event.target.value);
        event.preventDefault();
        event.stopPropagation();
    }

    const handleAccount = (event) => {
        if (event.target.value === "Account Providers" || !event.target.value) {
            setAccountantProvider()
        } else {
            setAccountantProvider(event.target.value);
        }
    }

    const onFormSubmit = async (event) => {
        try {
            event.preventDefault();
            const query = {
                businessName,
                yearEstablished,
                loanAmount,
                accountantProvider
            };
            // const url = `http://localhost:3001/account/fetch-balance-sheet`;
            // const balanceSheetResponse = Axios.get(url, {params: query});
            // const balanceSheetData = balanceSheetResponse?.data;
            const balanceSheetData = [
                {
                    year: 2020,
                    month: 12,
                    profitOrLoss: 250000,
                    assetsValue: 1234
                },
                {
                    year: 2020,
                    month: 11,
                    profitOrLoss: 1150,
                    assetsValue: 5789
                },
                {
                    year: 2020,
                    month: 10,
                    profitOrLoss: 2500,
                    assetsValue: 22345
                },
                {
                    year: 2020,
                    month: 9,
                    profitOrLoss: -187000,
                    assetsValue: 223452
                }
            ]
            setBalanceSheet(balanceSheetData);
        } catch (exception) {
            console.log(exception);
        }
    }

    const finalApplicationSubmission = async () => {
        try {
            const body = {
                businessName,
                yearEstablished,
                balanceSheet,
                loanAmount
            };
            // const url = `http://localhost:3001/decision/get-decision`;
            // const decisionResponse = await Axios.post(url, body);
            // const decisionMessage = decisionResponse?.data?.finalDecisionMessage;
            const decisionMessage = "Application Submitted successfully";
            setFinalDecisionMessage(decisionMessage);
        } catch (exception) {
            console.log(exception);
        }
    }

    useEffect(() => {
        dataInitialization();   
    }, [])

    return (
        <>
        <div className="parent-div">
            <form onSubmit={onFormSubmit}>
                <div className="child-div">
                    <SingleSelect options={setupData?.accountProviders} label={"Account Providers"} onChange={handleAccount} />    
                </div>
                <div className="child-div">
                    <input type="text" value={businessName} onChange={handleNameChange} placeholder="Business Name" />
                </div>
                <div className="child-div">
                    <input type="text" value={loanAmount} onChange={handleLoanAmount} placeholder="Loan Amount" />
                </div>
                <div className="child-div">
                    <input type="text" value={yearEstablished} onChange={handleYear} placeholder="Year Established (e.g. 2023)" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
        {balanceSheet ? 
            <table className="table">
                <tr>
                    <th className="table-cell">Year</th>
                    <th className="table-cell">Month</th>
                    <th className="table-cell">Profit or Loss</th>
                    <th className="table-cell">Assets Value</th>
                </tr>
                {balanceSheet.map((rowData) => {
                    return (
                        <tr>
                            <td className="table-cell">{rowData.year}</td>
                            <td className="table-cell">{rowData.month}</td>
                            <td className="table-cell">{rowData.profitOrLoss}</td>
                            <td className="table-cell">{rowData.assetsValue}</td>
                        </tr>
                    )
                })}
            </table>
        : <></>}
        {balanceSheet ? <div className="final-submit-button" onClick={finalApplicationSubmission}>Submit Application</div>: <></>}
        {finalDecisionMessage ? <div className="message">{finalDecisionMessage}</div> : <></>}
        </>
    )
}

export default DetailsPage;