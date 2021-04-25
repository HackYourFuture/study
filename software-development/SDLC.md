# Software development lifecycle

When developing software, you usually do this for a client or a customer together with other engineers. Software Development Life Cycle (SDLC) is the process used by the software industry to design, develop and test high quality software. There are different phases in software development that when finished will result in working software. The SDLC describes different phases with an ordering of the phases, each phase produces deliverables required by the next phase. It’s important to understand the different stages as it allows you to make a step from local engineering on your laptop to working in a team with others. This chapter will break down the different stages and roles and responsibilities involved.

There are 6 cycles for the development lifecycle that are important to distinguish. Some SDLC’s have one or two phases more but the overall concept remains the same, hence why we are only focusing on the following 6.

1.	Requirements
2.	Software design (or architecture)
3.	Development
4.	Testing
5.	Deployment
6.	Review

---
## Requirements gathering

**Background**: The requirement is the first stage in the SDLC process. In order to build new software as an engineer you need to make sure you built what a customer actually wants to use. Most software developing firms agree that the first phase of the process begins by identifying a need. This requirement is a wish from a customer that needs to be built. It’s usually the job of a Product manager / Product owner to define the requirements.

**Output**: a list of requirements that make up the project. Requirements can contain a design of how the application should look like. Which buttons are on the page, what colour, what is the behaviour of the application etc.
**Who is responsible:**: A product owner or project manager (the roles will be explained later)

## Software Design

**Background**: Software design is not to be misunderstood for the UI design of the application (look and feel). In software design the requirements from the previous phase are input for this phase in order to come up with a software design or a software architecture. This design outlines the software’s architecture and specify the technologies used in its development. Depending on the size and complexity of the software design, the process is usually performed by architects or senior engineers. A design can involve a part of a complex system (like a bank) or can be the design of a small application developed by 2 engineers.

Questions typically answered in this phase are. 

-	What tool or technology is most suited for the job:<br/>
    o	Does the system need to be high available<br/>
    o	Will there be a high load on the system (a lot of concurrent users)?<br/>
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

**Output:** a software design <br/>
**Who is responsible:** Engineers, either a (senior) software engineer of the team or an architect<br/>

## Software Development
**Background**: In this phase the actual coding starts and the system is built. One or multiple engineers start to build the entire system writing code in a chosen programming language. The requirements and the high level architecture design usually serve as input to this phase. As there are usually more than one engineer involved, and in the future other engineers might need to work on the code you created. It’s common that the engineers follow the coding guidelines of the company they are working for. 
During development sometimes shortcuts are taken to get faster to market. These shortcut are sometimes called technical debt. Wikipedia states; Technical Debt is a concept in software development that reflects the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.<br/>

**Output**: Written code <br/>
**Who is responsible**: Engineers

## Testing
**Background:** Testing is mentioned as a separate phase but usually already starts earlier. Tests are written during development to automate some of the testing. Generally in this phase the requirements used as the starting point of the application are used to test the functionality of the software. Any defects found are assigned to developers to get them fixed. As described above, testing is an integral part of the development phase as more and more tests can be automated.
Testing involves not only testing the new functionality that is built, but also making sure the other parts of a system still work as planned. For example if you need to update the schema of your database while developing a new feature, you want to make sure this doesn’t have any negative consequences for other parts of the system. This type of testing is called regression testing. 
From Wikipedia: *Regression testing is re-running functional and non-functional tests to ensure that previously developed and tested software still performs after a change. If not, that would be called a regression.* <br/>

**Output**: Tests either writen in code or test cases <br/>
**Who is responsible:** depending on the organization, separate Quality assurance testers, test engineers or the engineers themselves.


## Deployment (and environments)

**Background**
When working in bigger organizations you will notice that there is more than one environment that is being used to develop and deliver software in a controllable manner. Before we explain a bit on the concepts and the different environments let’s do a small step back and align on a deployment.

{% hyf-youtube src="https://www.youtube.com/watch?v=nZ3BaTY8c9M" %}

In the explanation above you see the difference of a local development environment and the environment which runs your software for the rest of the world to see (the production environment). However when multiple people work on the same code base and software program grows in complexity organizations tend to add one or more environments in the process.


### Different environment <br/>
**Development:**  This is where the software is developed, this could be the laptop of the engineer or a shared server where multiple engineers are working on together.  <br/>
**Testing:** this is the environment where the main testing is performed. From the 4 environments described this environment is the one that is sometimes optional. Testing could also be performed in both the development and staging environment. <br/>
**Staging:** This environment (sometimes called acceptance) is a near to identical version of production (usually without the customer data) to validate if everything is running in the right way. As this environment has the same setup as production things like performance testing (determining if the new release will reduce the maximum throughput) or security testing (to determine if any vulnerabilities are introduced) are usually performed. <br/>
**Production:** This is the environment that the customers are actually using.  <br/>

### Deployments
After the product is tested, it is deployed to the production environment. Sometimes first a UAT (User acceptance test) is done to verify if the developed product meets the desired customer or product manager expectation. This test usually happens on the staging environment. 
Deploying to production is the most sensitive step, this environment is usually protected and engineers should not directly push to it. Making changes to production may be done by deploying new code directly (overwriting old code, so only one copy is present at a time), or by deploying a configuration change. This can take various forms: <br/>
-	deploying a parallel installation of a new version of code, and switching between them with a configuration change; <br/>
-	deploying a new version of code with the old behavior and a feature flag, and switching to the new behavior with a configuration change that performs a flag flip; <br/>
-	or by deploying separate servers (one running the old code, one the new) and redirecting traffic from old to new with a configuration change at the traffic routing level. These in turn may be done all at once or gradually, in phases.<br/>

In some companies a small amount of users is being served a different version of the application. This concept is called A/B testing or multivariate testing. In this way it can be confirmed that the new change (for example a new text or button) has the desired effect, for example a higher conversion.<br/>
**Output:** An artifact deployed and running on production
**Who is responsible:**: The engineers are usually responsible for doing the release, while in some organization a separate group of people ‘operations’ is responsible for the release to production. 

## Maintenance
The last phase in the Software development lifecycle is the maintenance phase. This is the phase where maintenance is happening and is sometimes referred to as support. In literature the deployment and the maintenance phase are sometimes combined in one.
Maintenance is a bit different as it happens after the system is developed and deployed and by monitoring the performance it makes sure that the system continues to perform as per the specification mentioned in the first phase. Some activities in this phase are;
-	bug fixing - bugs are reported which where not found during testing
-	upgrades and patches – newer dependencies where vulnerabilities have been fixed need to be patched<br/>
**Output**: to fix a bug a change needs to be made, tested and deployed again as per the earlier phases
**Who is responsible:** The engineers are usually involved in making the changes, some organizations also have dedicated support engineers or operation teams to handle this phase.


## References 

* [Martin Fowler on Architecture](https://martinfowler.com/architecture/)

