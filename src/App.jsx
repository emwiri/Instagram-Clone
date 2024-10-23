
import { Route, Routes } from "react-router-dom"
import HomePage from "./componet/pages/HomePage"
import AuthPage from "./componet/pages/AuthPage"
import SignUp from "./componet/pages/SignUp"
import PageLayout from "./componet/Layout/PageLayout"

function App() {
  return (
    <PageLayout>
        <Routes>
          <Route path="/auth" element={<AuthPage/>}></Route>
          <Route path="/Home" element={<HomePage/>}></Route>
          <Route path="/sign" element={<SignUp/>}></Route>
        </Routes>
     </PageLayout>
  )
}
export default App
