import React from 'react'
import './use.css'
import supplychain from '../../assets/supply-chain.png';
import land from '../../assets/land.png'
function Use() {
  return (
    <> 
    <div class="row">
    <div class="column">
      <div class="card">
    <img src={supplychain} alt="" width={100} height={100}/>
    <h3>Product Supply Chain Management</h3> <br />
    <p>Blockchain technology can help ensure provenance, providing traceability across the supply chain. This can thwart counterfeiters and ensure safety. The technology also allows manufacturers, shippers and customers to aggregate data, analyze trends, and perform predictive monitoring.</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
<img src={land} alt="" width={100} height={100} />
<h3>Public Sector – Land Registration</h3> <br />
<p>Advancements in Land title record-keeping process could prove particularly valuable in many parts of the world where people are unable to secure legal documentation of their land assets. Digital documentation of property transfers and good technology will enable the confirmation for all parties in a real estate transaction.</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
      <img src={land} alt="" width={100} height={100} />
<h3>Public Sector – Land Registration</h3> <br />
<p>Advancements in Land title record-keeping process could prove particularly valuable in many parts of the world where people are unable to secure legal documentation of their land assets. Digital documentation of property transfers and good technology will enable the confirmation for all parties in a real estate transaction.</p>
      </div>
    </div>

    <div class="column">
      <div class="card">
      <img src={land} alt="" width={100} height={100} />
<h3>Public Sector – Land Registration</h3> <br />
<p>Advancements in Land title record-keeping process could prove particularly valuable in many parts of the world where people are unable to secure legal documentation of their land assets. Digital documentation of property transfers and good technology will enable the confirmation for all parties in a real estate transaction.</p>
      </div>
    </div>

  </div>
  </>
  )
}

export default Use
