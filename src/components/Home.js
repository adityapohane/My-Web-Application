import React from 'react'

const Home = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="img-fluid"
              src="https://source.unsplash.com/1600x600/?code,nature,forest"
              alt="img"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Lets Explore</h5>
              <p>A good wanderer leaves no trace.</p>
              <button class="btn btn-primary">Explore</button>&nbsp;&nbsp;&nbsp;
              <span>
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="img-fluid"
              src="https://source.unsplash.com/1600x600/?code,nature,mountains"
              alt="img"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Lets Explore</h5>
              <p>I am a wanderer passionately in love with life.</p>
              <button class="btn btn-secondary">Explore</button>
              &nbsp;&nbsp;&nbsp;
              <span>
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="img-fluid"
              src="https://source.unsplash.com/1600x600/?code,nature,mountain"
              alt="img"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Lets Explore</h5>
              <p>We began as wanderers, and we are wanderers still.</p>
              <button class="btn btn-success">Explore</button>&nbsp;&nbsp;&nbsp;
              <span>
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="container my-5 ">
        <div class="row mb-2 text-white">
          <div class="col-md-6 ">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">World</strong>
                <h3 class="mb-0">Travel Endlessly</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://source.unsplash.com/1100x1300/?code,nature,stars"
                  alt="img"
                  class="img-fluid bd-placeholder-img"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-danger">World</strong>
                <h3 class="mb-0">BackPacker</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://source.unsplash.com/900x1100/?code,nature,roads"
                  alt="img"
                  class="img-fluid bd-placeholder-img"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container my-5">
        <div class="row mb-2 text-white">
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-success">World</strong>
                <h3 class="mb-0">Sight Seeker</h3>
                <div class="mb-1 text-muted">Nov 12</div>
                <p class="card-text mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://source.unsplash.com/1600x600/?code,nature,sky"
                  alt="img"
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-warning">World</strong>
                <h3 class="mb-0">Tourist</h3>
                <div class="mb-1 text-muted">Nov 11</div>
                <p class="mb-auto">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <a href="#" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src="https://source.unsplash.com/1600x600/?code,nature,river"
                  alt="img"
                  class="bd-placeholder-img"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home