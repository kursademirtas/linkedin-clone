 import faker from 'faker';
 
 export const peopleData = []

 for(let i=0; i< 100; i++){
	let person ={
		id: faker.datatype.uuid(),
		name: faker.name.findName(),
		city: faker.address.city(),
		company: faker.company.companyName(),
		profile_picture: faker.image.avatar(),
		job_title:faker.name.jobTitle()
	}
	peopleData.push(person);
 }
 


