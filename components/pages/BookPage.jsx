import { useParams } from "react-router-dom"

export default function BookPage(){
    const { id } = useParams();
    return(
        <>
        <div class="p-5">
            <div class="container-fluid py-5 d-flex gap-4">
                <div className="cover col-12 col-sm-5 col-md-4">
                    <img className="img-fluid" src="https://placehold.co/600x400?text=Il+nome+della+rosa" alt="Il nome della rosa book" />
                </div>
                    <div className="details">
                        <h1 class="display-5 fw-bold">Il nome della rosa</h1>
                        <div className="my-2"><i className="bi bi-person-badge"></i>Author name</div>
                        <p class="lead">
                            Abstract:
                        </p>
                    </div>
            </div>
        </div>
        

        <section className="mb-4">
            <div className="container">
            <h3>Leave your Review</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your name</label>
                    <input name="name" type="text" className="form-control" id="name" placeholder="anonymous"/>
                </div>
                <div className="mb-3">
                     <label htmlFor="review" className="form-label">Your name</label>
                    <input name="review" type="text" className="form-control" id="review" rows="3"/>
                </div>
                            <div className="mb-3">
              <label htmlFor="rating" className="form-label">
                Your rating
              </label>
              <select
                name="rating"
                id="rating"
                className="form-select"

              >
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
            <button type="submit" className="btn btn-dark">
                Submit Review
              </button>
            </form>
            </div>
            <hr className="w-50 mx-auto pt-5 my-5"/>
        </section>


        <section id="reviews">
            <div className="container">
                <div className="card p-3 mb-3 position-relative">
                    <h4>Giovanni</h4>
                    <p>Rich, emotional and beatifully written</p>
                    <div className="vote text-warning position-absolute top-0 end-0 m-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>

                    </div>
                </div>
                <div className="card p-3 mb-3 position-relative">
                    <h4>Giovanni</h4>
                    <p>Rich, emotional and beatifully written</p>
                    <div className="vote text-warning position-absolute top-0 end-0 m-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>

                    </div>
                </div>
                <div className="card p-3 mb-3 position-relative">
                    <h4>Giovanni</h4>
                    <p>Rich, emotional and beatifully written</p>
                    <div className="vote text-warning position-absolute top-0 end-0 m-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}