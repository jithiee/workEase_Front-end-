import React from "react"


function App() {


  return (
    <>
  
   <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    
    </>
  )
}

export default App
