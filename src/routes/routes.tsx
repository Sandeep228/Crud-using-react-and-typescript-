import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
  } from "react-router-dom";
import DataCard from '../containers/DataCard/DataCard';
import NewForm from '../containers/NewForm/NewForm';
  
  const TodoRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<DataCard />} />
          <Route path="/form" element={<NewForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    );
  };
  
  export default TodoRoutes;
  