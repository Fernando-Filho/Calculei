function quantAvos(dataAdmission){
    const dayEnd = new Date(2022, 11, 31)
    let yearAdmission = dataAdmission.getFullYear()
    let monthAdmission = dataAdmission.getMonth()
    let dayAdmission = dataAdmission.getDate()
    
    let counterMonth = monthAdmission
    let counterDay = dayAdmission
    let avos = 0

    for ( counterMonth; counterMonth <= dayEnd.getMonth(); counterMonth++){
        let numberOfDays = diasNoMes(monthAdmission, yearAdmission)
        let verificationAvo = (numberOfDays - counterDay) + 1

        if (verificationAvo >= 15) {
            avos++;
        }
        counterDay = 1
    }
    return avos
}