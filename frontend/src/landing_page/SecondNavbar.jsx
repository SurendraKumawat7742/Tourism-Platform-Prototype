import React from 'react';
function SecondNavbar() {
  return (
    <div class="container p-5 position-relative">
      <div class="row mt-3 p-2" style={{backgroundColor:"#CECECE"}}>
        <div
            class="me-auto mb-2 mb-lg-0 d-flex gap-3"
          >
              <a class="nav-link active" aria-current="page" href="#" style={{marginLeft:"20rem"}}>
                <b>AR/VR</b>
              </a>
              <a class="nav-link active" aria-current="page" href="#"  style={{marginLeft:"7rem"}}>
                <b>ShopLocal</b>
              </a>
              <a class="nav-link active" aria-current="page" href="#"  style={{marginLeft:"7rem"}}>
                <b>SmartStay</b>
              </a>
              <a class="nav-link active" aria-current="page" href="#"  style={{marginLeft:"7rem"}}>
                <b>Rewards</b>
              </a>
          </div>
      </div>
    </div>
   );
}

export default SecondNavbar;