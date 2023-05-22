import "./Problemsets.css";

function ProblemsTable( {problems} ) {
  let content = [];

  let addTableHeaders = true;
  problems.forEach((problem) => {
    if(addTableHeaders) {
      content.push(
        <tr>
          <th>
            Id
          </th>
          <th>
            Title 
          </th>
          <th>
            Difficulty 
          </th>
          <th>
            Acceptance 
          </th>
        </tr>
      )
      addTableHeaders = false;
    }
    let difficultyColor;
    if(problem.difficulty === "Hard") {
      difficultyColor = {color: "red"};
    }
    else if(problem.difficulty === "Medium") {
      difficultyColor = {color: "yellow"};
    }
    else {
      difficultyColor = {color: "green"};
    }
    content.push(
      <tr>
        <td>{problem.id}</td>
        <td>{problem.title}</td>
        <td style={difficultyColor}>{problem.difficulty}</td>
        <td>{problem.acceptance}</td>
      </tr> 
    ) 
  })

  return (
    <div class="container">
      <table className="problemset">
        {content}
      </table>
    </div>
  )
}

export default function Problemsets() {
  const problems = [
    {
      id: 1,
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "42%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    {
      id: 2,
      title: "Bitwise AND of Numbers Range",
      difficulty: "Medium",
      acceptance: "41%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    { 
      id: 3,
      title: "Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    },
    {
      id: 4, 
      title: "Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%",
      content: "Given a number, find another number",
      testCase: "[1, 2, 3, 4]",
      output: "3"
    }
  ];

  return (
    <>
      <ProblemsTable problems={problems} /> 
    </>
  )
} 