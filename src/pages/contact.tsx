import {StarterLayout} from "layout";

const Register = () => {

    return (
        <div className={"prose px-4 my-8"}>
            <h2 className={"heading"}>Contact Us</h2>
            <p>Please fill the provided form and we will get back to you as soon as possible.</p>
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                        email *</label>
                    <input type="email" id="email"
                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                           placeholder="name@acme.com" required/>
                </div>
                <div>
                    <label htmlFor="subject"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject *</label>
                    <input type="text" id="subject"
                           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
                           placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
                        message *</label>
                    <textarea id="message" rows={6}
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                              placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-700 sm:w-fit hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit
                </button>
            </form>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h1 className={"heading"}>Get in Touch</h1>
            <p>You can contact us on any of the following platforms, and we will get back to you.</p>
            <table className="table-auto">
                <tbody>
                <tr>
                    <td>Email</td>
                    <td><a href="mailto:">icac3n22@gmail.com</a></td>
                </tr>
                <tr>
                    <td>Contact No.</td>
                    <td><a href="tel:">+91-7835878146</a></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><a href="mailto:">vishnu.sharma@galgotiacollege.edu</a></td>
                </tr>
                <tr>
                    <td>Gmail:</td>
                    <td><a href="mailto:">vishnusharma97@gmail.com</a></td>
                </tr>
                </tbody>
            </table>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h1 className={"heading"}>Location</h1>
            <p><strong>Galgotias College of Engineering and Technology</strong>, 1, Knowledge Park II, Greater
                Noida,
                Uttar Pradesh 201310</p>
            <div className={"shadow-md w-fit rounded-md overflow-clip"}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.738221246928!2d77.49505052708089!3d28.45730667576092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1dc8b29c0e1%3A0x4ee84fe65c694f0!2sGALGOTIAS%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY%2C%20Knowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1682150875715!5m2!1sen!2sin"
                    width="600" height="450" allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )

}

export default Register;