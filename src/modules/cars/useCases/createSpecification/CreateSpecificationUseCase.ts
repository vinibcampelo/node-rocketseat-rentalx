import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repository/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecifivationsRepository")
        private specificationsRepository: ISpecificationsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        const specifications = await this.specificationsRepository.create({
            name,
            description,
        });
        return specifications;
    }
}

export { CreateSpecificationUseCase };
