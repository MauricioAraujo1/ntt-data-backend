import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entities/omdb.entity';

createConnection()
  .then(async (connection) => {
    console.log('Conexão criada com sucesso!');

    await connection.dropDatabase();
    await connection.synchronize();

    console.log('Tabelas criadas com sucesso!');

    const userRepository = connection.getRepository(User);

    const user = new User();
    user.title = 'Guardians of the Galaxy Vol. 2';
    user.plot =
      'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lords encounter with his father the ambitious celestial being Ego.';
    user.actors = 'Chris Pratt, Zoe Saldana, Dave Bautista';
    await userRepository.save(user);

    console.log('Usuário salvo com sucesso!');

    await connection.close();
    console.log('Conexão fechada com sucesso!');
  })
  .catch((error) => console.log(error));
