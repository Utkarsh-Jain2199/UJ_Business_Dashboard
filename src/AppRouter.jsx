
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OrdersManagementView from './pages/OrderProcessing';
import BusinessAnalyticsView from './pages/DataInsights';

const RoutingConfiguration = () => {
  return (
    <Router>
      <Routes>
        <Route path="/orders" element={<OrdersManagementView />} />
        <Route path="/analytics" element={<BusinessAnalyticsView />} />
        <Route path="/" element={<BusinessAnalyticsView />} />
      </Routes>
    </Router>
  );
};

export default RoutingConfiguration;