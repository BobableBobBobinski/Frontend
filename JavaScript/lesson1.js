<script> 
    const sqos = (a, b) => {
        const answer = ((a**2) + (2*a*b) + (b**2));
        console.log(answer);
        return answer;
    };
    const FinalGrade = (exam, project) =>{
        if(exam > 90 || project >= 10){
        console.log(100);
        }    
        else if(exam > 75 && project >=5){
            console.log(90);
        }
        else if(exam > 50 && project >= 2){
            console.log(75);
        } else {
            console.log(0);
        
    };
    
    let a = prompt("What is exam mark?"); 
    let b = prompt("How many projects?"); 
    FinalGrade(a, b);
    </script>