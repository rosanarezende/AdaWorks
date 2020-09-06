import * as Yup from 'yup';
import Factory from '../models/Factory';
import Women from '../models/Women';
 
class FactoryController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      role: Yup.string().required(),
      password: Yup.string().required(),
      cnpj: Yup.number().required(),
      factoryName: Yup.string().required(),
      occupationArea: Yup.string(),
      description: Yup.string().required(),
      companyPolices: Yup.array().required(),
      linkForLinkedin: Yup.string(),
      agreeToTerms: Yup.boolean().required(),
    });
 
    if(!(await schema.isValid(request.body))){
      return response.status(400).json({ error: 'Validation fails'});
    }
 
    const FactoryExists = await Factory.findOne({ where: {cnpj: request.body.cnpj} });
 
    if (FactoryExists) {
      return response.status(400).json({error: 'Factory already exists'});
    }

    const womenAlreadyRegistered = await Women.findOne({ where: {email: request.body.email} });

    if (womenAlreadyRegistered) {
      return response.status(400).json({error: 'User already exists'});
    }
 
    const {
      id,
      name,
      email,
      role,
      cnpj,
      factoryName,
      occupationArea,
      description,
      companyPolices,
      agreeToTerms
    } = await Factory.create(request.body);
 
    return response.json({
      id,
      name,
      email,
      role,
      cnpj,
      factoryName,
      occupationArea,
      description,
      companyPolices,
      agreeToTerms
    });
  }
}
 
export default new FactoryController();