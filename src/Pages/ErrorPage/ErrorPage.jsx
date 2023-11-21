import error from "../../assets/errorpage/404.gif"

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={error} alt="" />
        </div>
    );
};

export default ErrorPage;