import ContactAddress from "./ContactAddress"
import OpeningTimes from "./OpeningTimes"


const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <ContactAddress />
                </div>
                <hr class="clearfix w-100 d-md-none pb-3"></hr>
                <div class="col-md-6 mb-md-0 mb-3">
                    <OpeningTimes />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer