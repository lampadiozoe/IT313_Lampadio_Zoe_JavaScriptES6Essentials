import isPassing, { computeAverage } from "./gradeUtils.js";

const enrollees = [
    { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
    { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
    { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
    { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
    { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

function getEnrollees() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(enrollees);
        }, 1000);
    });
}

async function generateReport() {
    try {
        const data = await getEnrollees();

        const results = data.map((enrollee) => {
            const { name, prelim, midterm, final } = enrollee;

            const average = computeAverage(prelim, midterm, final);

            const status = isPassing(average)
                ? "PASSING"
                : "PROBATION";

            return {
                name,
                average,
                status
            };
        });

        const passing = results.filter(
            ({ status }) => status === "PASSING"
        );

        const probation = results.filter(
            ({ status }) => status === "PROBATION"
        );

        const classAverage =
            results.reduce(
                (total, { average }) => total + average,
                0
            ) / results.length;

        const allResults = [...results];

        let report = `=== IT313 Enrollment Eligibility Report ===\n`;

        allResults.forEach(({ name, average, status }) => {
            report += `${name} - Average: ${average.toFixed(2)} - ${status}\n`;
        });

        report += `Class Average: ${classAverage.toFixed(2)}\n`;
        report += `Passing: ${passing.length} / ${results.length}`;

        console.log(report);

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

generateReport();