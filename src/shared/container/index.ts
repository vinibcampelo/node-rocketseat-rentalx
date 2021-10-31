import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repository/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repository/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repository/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repository/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
