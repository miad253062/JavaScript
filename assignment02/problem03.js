function calculateAiCost(tokensUsed) {
    if(typeof tokensUsed !== 'number'){
        return "Invalid";
    }

    if(tokensUsed < 0){
        return "Invalid";
    }

    const netUsed = tokensUsed - 500;
    if(netUsed > 0){
        const chargeApplied = netUsed / 100;
        return Math.floor(chargeApplied) * 5;
    }
    
    return 0;
}


console.log(calculateAiCost('1000'))