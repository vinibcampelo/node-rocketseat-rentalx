import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ICategoriesRepository } from "../../repository/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({name, description}: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }
    
        this.categoriesRepository.create({name, description});
    }
}

export { CreateCategoryUseCase }