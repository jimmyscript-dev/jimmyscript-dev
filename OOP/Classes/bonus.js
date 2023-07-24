class EnemyFactory {
    generateFlyingEnemy(name) {
        class FlyingEnemy {
            constructor(flyingSkill) {
                this.name = flyingSkill;
            }

            fly() {
                console.log(`${this.name} can fly!`)
            }

            laserBeam() {
                console.log(`${this.name} can shoot laserbeam!`)
            }

            invulnerable() {
                console.log(``)
            }
        }

        return new FlyingEnemy(name);
    }

    static generateSwimmingEnemy(name) {
        class SwimmingEnemy {
            constructor(swimmingSkills) {
                this.name = swimmingSkills;
            }

            swim() {
                console.log(`${this.name} can swim!`)
            }
        }

        return new SwimmingEnemy(name);
    }

    static generateShapeShiftEnemy(name) {
        class ShapeShifter {
            constructor(shapeShifting) {
                this.name = shapeShifting;
            }

            shapeShift() {
                console.log(`${this.name} can shape shift!`)
            }
        }

        return new ShapeShifter(name);
    }

    static generateSuperSpeedEnemy(name) {
        class SpeedSkill {
            constructor(superSpeedSkill) {
                this.name = superSpeedSkill;
            }

            flash() {
                console.log(`${this.name} has a super speed!`)
            }
        }

        return new SpeedSkill(name);
    }
};

const factory = new EnemyFactory();
//console.log(Object.getOwnPropertyNames(factory));
//console.log(Object.getOwnPropertyNames(factory.__proto__));
//console.log(Object.getOwnPropertyNames(factory.__proto__.__proto__.__proto__));// NULL
console.log(factory.__proto__.constructor.name)
const superman = factory.generateFlyingEnemy('superman');
//console.log(Object.getOwnPropertyNames(superman.__proto__.__proto__.__proto__));// null\
console.log(superman.constructor); //[class FlyingEnemy]
console.log(superman.constructor.name) // FlyingEnemy
superman.fly(); // superman can fly!

const aquaman = EnemyFactory.generateSwimmingEnemy('aquaman');
console.log(EnemyFactory); // [class EnemyFactory]
aquaman.swim();

const martianManhunter = EnemyFactory.generateShapeShiftEnemy('Martian Manhunter');
martianManhunter.shapeShift();
superman.laserBeam();

const flash = EnemyFactory.generateSuperSpeedEnemy('Flash');
flash.flash();


console.log(factory.__proto__);
console.log(superman.__proto__)
console.log(aquaman.__proto__)