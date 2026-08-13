//Problem-01: Student Introduction Generator
const studentIntroduction = (studentObject) => {
  if (
    studentObject &&
    typeof studentObject === "object" &&
    !Array.isArray(studentObject)
  ) {
    if (
      studentObject.hasOwnProperty("name") &&
      studentObject.name &&
      typeof studentObject.name === "string" &&
      studentObject.hasOwnProperty("age") &&
      Number.isFinite(studentObject.age) &&
      studentObject.age > 0 &&
      studentObject.hasOwnProperty("course") &&
      studentObject.course &&
      typeof studentObject.course === "string"
    ) {
      return `My name is ${studentObject.name}. I am ${studentObject.age} years old. I am learning ${studentObject.course}.`;
    }
  }
  return "Invalid";
};

//Problem-02: Active User Filter
const filterActiveUsers = (activeUsers) => {
	if(!Array.isArray(activeUsers) || activeUsers.length === 0){
		return 'Invalid';
	}

	if(activeUsers.some(user => !user || !user.hasOwnProperty('isActive') || typeof user.isActive !== 'boolean')){
		return 'Invalid'
	}

	const users = activeUsers.filter(user => user.isActive === true);
	return users;

};

//Problem-03: Trending Hashtag Counter
const countHashtags = (caption) => {
    if(typeof caption === 'string'){
        const totalHashTags = caption.split(' ').filter(wordWithHash => wordWithHash.startsWith('#'))
        const longestTag = totalHashTags.reduce((longest, currentWord) => {return (longest.length >= currentWord.length)? longest: currentWord}, '').slice(1);
        return {hashtagCount: totalHashTags.length, longestTag};
    }
    return 'Invalid'
};

//Problem-04: Bonus Score Calculator
const bonusScore = (scores) => {
    if(scores && Array.isArray(scores) && scores.length !== 0){
        const updatedArr = scores.map(score => (typeof score === 'number' && Number.isFinite(score) && !Number.isNaN(score))? score+10: "invalid");
        return updatedArr.includes('invalid')? "Invalid": updatedArr.reduce((acc, current) => { return acc+current}, 0); 
    }

    return 'Invalid'
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
const generateLeaderboard = (students) => {
  if (!Array.isArray(students) || students.length === 0) {
    return "Invalid";
  }
  if (
    students.some(
      (student) =>
        !student ||
        !student.hasOwnProperty("name") ||
        !student.name ||
        typeof student.name !== 'string' ||
        !student.hasOwnProperty("score") ||
        !Number.isFinite(student.score),
    )
  ) {
    return "Invalid";
  }

  const qualified = students.filter((student) => student.score >= 70);
  const names = qualified.map((name) => {
    return name.name.toUpperCase();
  });

  return names.slice(0, 3);
};