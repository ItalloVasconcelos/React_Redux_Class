import students from '../data/students'

// eslint-disable-next-line import/no-anonymous-default-export
export default _ => {


    const studentsList = students.map(student => {
        return (
            <li key={student.id}>
                <strong>Aluno:</strong> {student.name} - <strong>Nota:</strong> {student.score}
            </li>
        );

    });
    return (
        <div>
            <ul style={{listStyle:"none"}}>
            {studentsList}
            </ul>
        </div>
    )
}