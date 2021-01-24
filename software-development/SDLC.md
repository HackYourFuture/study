# Software development lifecycle

When developing software, you usually do this for a client or a customer, together with other engineers. Software Development Life Cycle (SDLC) is the process used by the software industry to design, develop and test high quality software. There are different phases in the software development that when finished will result in working software. The SDLC describes different phases with an ordering of the phases, each phase produces deliverables required by the next phase. It’s important to understand the different stages as it allows you to make a step from local engineering on your laptop to working in a team with others. This chapter will break down the different stages and roles and responsibilities involved.

There are 6 cycles for the development lifecycle that are important to distinguish. Some SDLC’s have one or two phases more but the overall concept remains the same, hence why we are only focusing on the following 6.

1.	Requirements
2.	Software design (or architecture)
3.	Development
4.	Testing
5.	Deployment
6.	Review

---
## Requirements gathering

**Background**: The requirement is the first stage in the SDLC process. In order to built new software as an engineer you need to make sure you built what a customer actually wants to use. Most software developing firms agree that the first phase of the process begins by identifying a need. This  requirement is a wish from a customer that needs to be built. It’s usually the job of a Product manager / Product owner to define the requirements.

**Output of this phase**: a list of requirements that make up the project. Requirements can contain a design of how the application should look like. Which buttons are on the page, what collor, what is the behaviour of the application etc.

**Role(s) involved**: A product owner or project manager (the roles will be explained later)

## Software Design

**Background**: Software design is not to be misunderstood for the UI design of the application (look and feel). In software design the requirements from the previous phase are input for this phase in order to come up with a software design or a software architecture. This design outlines the software’s architecture and specify the technologies used in its development. Depending on the size and complexity of the software design, the process is usually performed by architects or senior engineers. A design can involve a part of a complex system (like a bank) or can be the design of a small application developed by 2 engineers.

Questions typically answered in this phase are. 

-	What tool or technology is most suited for the job:<br/>
    o	Does the system needs to be high available<br/>
    o	Will there be a high load on the system (a lot of concurrent user)?<br/>
    o	What data storage do we need to select<br/>
-	What tools do we have available in the company<br/>
    o	Some tools (like databases) come with high licenses costs<br/>
    o	Not all teams can decide themselves what they want to use<br/>
    o	The design needs to make sure the software can be supported and operated within the organization’s constraints<br/>
-	How do the different components communicate<br/>
    o	In a complex system there are multiple applications communicating with each other to complete a business process<br/>
    o	What data format will be used<br/>

### Software architecture

Because of its importance we spend a little bit more time on the software architecture as it is an essential part of software development. 
As described on [this website on architecture](https://martinfowler.com/architecture/), Architecture is described as the way the highest level components are wired together. The site also explains the reason why architecture matters:

*Architecture is a tricky subject for the customers and users of software products - as it isn't something they immediately perceive. But a poor architecture is a major contributor to the growth of cruft - elements of the software that impede the ability of developers to understand the software. Software that contains a lot of cruft is much harder to modify, leading to features that arrive more slowly and with more defects.*

It's important to understand that making fundamental changes to the software architecture can be costly; changing from a MongoDB database to Postgress can be complex and time consuming. Therefore it's important to understand that: <br/>
*Software architecture is about making fundamental structural choices that are costly to change once implemented.*



**Output of this phase:** a software design <br/>
**Persons involved:** Engineers, either a (senior) software engineer of the team or an architect<br/>

## Software Development

## Testing

## Software Design

## Deployment (and environments)

**Background**
When working in bigger organizations you will notice that there is more than one environment that is being used to develop and deliver software in a controllable manner. Before we explain a bit on the concepts and the different environments let’s do a small step back and align on a deployment.

{% video src="https://www.youtube.com/watch?v=nZ3BaTY8c9M" %} 

In the explanation above you see the difference of a local development environment and the environment which runs your great software for the rest of the world to see (the production environment). However when multiple people work on the same code base and software program grows in complexity, organizations tend to add one or more environments in the process.

An environment definition and example

**Different environments** <br/>
Development environment: This is where the software is developed, this could be the laptop of the engineer or a shared server where multiple engineers are working on together. <br/>
Staging environment<br/>
Production<br/>
Activities at different stages of the funnel: testing, performance, security, etc. etc. etc. <br/>
Different roles<br/>
Definitions: DTAP<br/>


---
Reference :

a
---

## References

* [Agile Manifesto](https://agilemanifesto.org/principles.html)
https://martinfowler.com/architecture/

### Text Books

