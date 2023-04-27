import {StarterLayout} from "layout";
import Button from "@/components/button";

const Register = () => {

    return (
        <div className={"prose mx-4 my-8"}>
            <h1 className={"heading"}>Registration</h1>
            <p>Learn How to Register for ICAC3N-23: A Guide to Submitting Your Papers for the International Conference
                on Advances in Computing, Communication Control and Networking.</p>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h2 className={"heading"}>Registration Fee</h2>
            <div>
                <img src="https://icac3n.in/static/media/Registration%20Fee.cb89086a69c6cb382932.jpg" alt=""/>
                <p>* Including 18% GST</p>
            </div>

            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h2 className={"heading"}>Camera Ready Format</h2>
            <p>Authors are requested to follow the IEEE conference paper format.</p>
            <div className={"flex flex-col space-y-4"}>
                <Button link={"/document/PAPER_ID_ICAC3N23.docx"} >Download Docx File</Button>
                <Button link={"/document/PAPER_ID_ICAC3N23.pdf"}>Download PDF File</Button>
            </div>

            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h2 className={"heading"}>Sample PPT Format</h2>
            <p>
                Please follow the below format for the presentation. The presentation should be in the PPT format.
            </p>
            <div className={"flex flex-col space-y-4"}>
                <Button link={"/document/SamplePPTICAC3N-23.pptx"}>Download PPTX File</Button>
            </div>


            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
            <h2 className={"heading"}>Bank Account Details</h2>
            <p>
                Here are the bank account details for the registration fee payment.
            </p>
            <p><strong>PAYMENT MODE</strong> – NEFT / IMPS / DIRECT DEPOSIT / SWIFT TRANSFER/UPI</p>

            <table className="table-auto">
                <tbody>
                <tr>
                    <td>Account Number</td>
                    <td>6420000100006852</td>
                </tr>
                <tr>
                    <td>Account Name</td>
                    <td>GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY</td>
                </tr>
                <tr>
                    <td>IFSC Code</td>
                    <td>PUNB0671700
                    </td>
                </tr>
                <tr>
                    <td>Swift Code</td>
                    <td>PUNBINBBMSN
                    </td>
                </tr>
                <tr>
                    <td>Bank Name</td>
                    <td>PUNJAB NATIONAL BANK
                    </td>
                </tr>
                <tr>
                    <td>Account Type</td>
                    <td>Saving</td>
                </tr>
                <tr>
                    <td>Bank Address</td>
                    <td>Punjab National Bank, Sector-63 Gautam Buddha Nagar-201301, U.P.</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Register;