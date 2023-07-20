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
const superman = factory.generateFlyingEnemy('superman');
superman.fly(); // superman can fly!

const aquaman = EnemyFactory.generateSwimmingEnemy('aquaman');
aquaman.swim();

const martianManhunter = EnemyFactory.generateShapeShiftEnemy('Martian Manhunter');
martianManhunter.shapeShift();
superman.laserBeam();

const flash = EnemyFactory.generateSuperSpeedEnemy('Flash');
flash.flash();