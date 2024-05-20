import "./PlanesComplementarios.css";
import plan1 from "../../../assets/bicentenarioImages/planesComplementarios/plan1.png";
import plan2 from "../../../assets/bicentenarioImages/planesComplementarios/plan2.png";
import plan3 from "../../../assets/bicentenarioImages/planesComplementarios/plan3.png";
import plan4 from "../../../assets/bicentenarioImages/planesComplementarios/plan4.png";

function PlanesComplementarios() {
    const planes = [
        {
            img: plan1,
            title: "Plan 1",
        },
        {
            img: plan2,
            title: "Plan 2",
        },
        {
            img: plan3,
            title: "Plan 3",
        },
        {
            img: plan4,
            title: "Plan 4",
        },
    ];
    return (
        <section className="planes-complementarios">
            <div className="planes-title">
                <h2>PLANES COMPLEMENTARIOS</h2>
                <span>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="planes-title-decoration"
                        ></div>
                    ))}
                </span>
            </div>
            <div className="planes-container">
                {planes.map((plan) => (
                    <div key={plan.title} className="plan">
                        <img src={plan.img} alt="plan" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PlanesComplementarios;
