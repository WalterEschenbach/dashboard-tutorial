import React, { Component } from "react"
import { Routes, Route } from "react-router-dom"
import reviewStore from '../stores/review_store'
import DashboardMenu from "../components/dashboard_menu"
import ReviewsTable from "../components/reviews_table"

class DashboardPage extends Component {
    componentDidMount() {
        let dataUrl = "http://localhost:3000/data/reviews_Musical_Instruments_5.json"
        reviewStore.loadData(dataUrl)
    }

    render() {
        return (
            <div id="dashboard_page" className="App-page">
                <DashboardMenu />
                <Routes>
                    <Route exact path="/dashboard"
                        component={() => "Dashboard Content"} />
                    <Route path="/dashboard/reviews_table"
                        component={ReviewsTable} />
                </Routes>
            </div>
        )
    }
}

export default DashboardPage
