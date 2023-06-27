import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p
            style={{
                fontSize: "26px",
                margin: "0 0 10px 0",
            }}
            >
            Student Portal
            </p>
            <Button
                type="button"
                data-testid="student-btn"
                style={{
                    background: "#1f2937",
                    border: "transparent",
                    padding: "10px",
                    borderRadius: "4px",
                    color: "#fff",
                    fontWeight: "lighter",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/student")}
            >
            ALL STUDENT    
            </Button>
        </div>
    )

};

export default Home;
