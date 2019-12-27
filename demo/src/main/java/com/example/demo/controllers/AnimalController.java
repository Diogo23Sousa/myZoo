package com.example.demo.controllers;

import com.example.demo.models.Animal;
import com.example.demo.repositories.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.io.File;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AnimalController {

    @Autowired
    private AnimalRepository animalRepository;

    @PostMapping("/animal/create")
    public Animal createAnimal(@RequestBody Animal newAnimal) {
        return animalRepository.save(newAnimal);
    }

    @GetMapping("/animal/getall")
    public List<Animal> findAll () {
        return animalRepository.findAll();
    }

    @GetMapping("/animal/get/{id}")
    public Optional<Animal> findById(@PathVariable ("id") Long id){
        return animalRepository.findById(id);
    }

    @GetMapping("/animal/getbyname/{name}")
    public Optional<List<Animal>> findByName(@PathVariable ("name") String name){
        return animalRepository.findByName(name);
    }

    @GetMapping("/animal/getbyletter/{letter}")
    public Optional<List<Animal>> findByLetter(@PathVariable ("letter") String letter){
        return animalRepository.findByContainsLetter(letter);
    }

    @GetMapping("/animal/getbyage/{age}")
    public Optional<List<Animal>> findByAge(@PathVariable ("age") Long age){
        return animalRepository.findByAge(age);
    }

    @GetMapping("/animal/getbynumber/{number}")
    public Optional<List<Animal>> findByNumber(@PathVariable ("number") Long number){
        return animalRepository.findByContainsNumber(number);
    }

    @GetMapping("/animal/getbyspecie/{specie}")
    public Optional<List<Animal>> findBySpecie(@PathVariable ("specie") String specie){
        return animalRepository.findBySpecie(specie);
    }

    @GetMapping("/animal/getspeciebyletter/{letter}")
    public Optional<List<Animal>> findBySpecieLetter(@PathVariable ("letter") String letter){
        return animalRepository.findBySpecieContainsLetter(letter);
    }

    @GetMapping("/animal/getbyuser/{username}")
    public Optional<List<Animal>> findByUser (@PathVariable ("username") String username) {
        return animalRepository.findAllByUser(username);
    }

    @GetMapping("/animal/getbyuserletter/{usernameletter}")
    public Optional<List<Animal>> findByUserLetter (@PathVariable ("usernameletter") String usernameletter) {
        return animalRepository.findByUserContainsLetter(usernameletter);
    }

    @DeleteMapping("/animal/deleteall")
    public void deleteAll () {
        animalRepository.deleteAll();
    }

    @DeleteMapping("/animal/delete/{id}")
    public void deleteById (@PathVariable ("id") Long id) {
        animalRepository.deleteById(id);
    }

    @PostMapping("/animal/generate")
    public void generateAnimals() {
        animalRepository.save(new Animal("Fera", "Cat", (long) 23, "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 100, "Diogo" , "Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae. Domestic cats are often called house cats when kept as indoor pets. Cats have been domesticated (tamed) for nearly 10,000 years. They are one of the most popular pets in the world."));
        animalRepository.save(new Animal("Feroz", "Dog", (long) 1, "https://images.pexels.com/photos/434090/pexels-photo-434090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 23, "Luis" ,  "Dogs (Canis lupus familiaris) are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. ... They are a popular pet because they are usually playful, friendly, loyal and listen to humans."));
        animalRepository.save(new Animal("Furioso", "Tiger", (long) 44, "https://images.pexels.com/photos/46251/sumatran-tiger-tiger-big-cat-stripes-46251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 40, "Eduardo" ,  "The tiger (Panthera tigris) is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on orangish-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar."));
        animalRepository.save(new Animal("Furiosa", "Leopard", (long) 22, "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 400, "Luisa" ,  "Leopards are large cats, with light-colored fur, and black spots and rosettes across their entire body. The rosettes look somewhat like hollowed-out spots, and are smaller than those of the jaguar. Males of the species are larger than the females, and can stand up to 28 in."));
        animalRepository.save(new Animal("Velocidade", "Cheetah", (long) 9, "https://images.pexels.com/photos/88234/pexels-photo-88234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 600, "Rafaela" ,  "These cats are lean and lanky, allowing them to reach incredible speeds. They have tan-colored fur with solid black, round spots. They have very long legs, a long narrow tail for balance, and a deep chest that contains large lungs."));
        animalRepository.save(new Animal("Max", "Elephant", (long) 48, "https://images.pexels.com/photos/1054666/pexels-photo-1054666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", (long) 2300, "Diogo" ,  "Elephant, (family Elephantidae), largest living land animal, characterized by its long trunk (elongated upper lip and nose), columnar legs, and huge head with temporal glands and wide, flat ears."));
        animalRepository.save(new Animal("Tiara", "Snake", (long) 53, "https://animais.culturamix.com/blog/wp-content/gallery/fotos-cobra-real-5/Fotos-Cobra-Real-9.jpg", (long) 3000, "Eduardo", "The king cobra, also known as the hamadryad, is a venomous snake species in the family Elapidae, endemic to forests from India through Southeast Asia. It is threatened by habitat destruction and has been listed as Vulnerable on the IUCN Red List since 2010. It is the world's longest venomous snake."));
        animalRepository.save(new Animal("Melga", "Snake", (long) 22, "https://www.nationalgeographic.com/content/dam/animals/pictures/reptiles/g/green-anaconda/green-anaconda.jpg", (long) 340, "Eduardo", "Eunectes is a genus of boas found in tropical South America. They are a semiaquatic group of snakes and include one of the largest snakes in the world, E. murinus, the green anaconda. The name Eunectes is derived from the Greek word Eυνήκτης, which means good swimmer. Four species are currently recognized."));
        animalRepository.save(new Animal("Jesus", "Crocodile", (long) 23, "https://statig2.akamaized.net/bancodeimagens/7y/dj/he/7ydjhee6wd25voc3j68yrrl74.jpg", (long) 20, "Rafaela", "The crocodylian family Crocodylidae includes the true crocodiles, which are the members of the subfamily Crocodylinae, as well as potentially the false gharial, the only extant member of the subfamily Tomistominae."));
        animalRepository.save(new Animal("Bob", "Cat", (long) 55, "https://soyungato.com/wp-content/uploads/2019/07/Savannah-en-el-jardin.jpg", (long) 700, "Luisa", "The Savannah is a hybrid cat breed. It is a cross between a serval and a domestic cat."));
        animalRepository.save(new Animal("Diadora", "Cat", (long) 12, "https://vetstreet.brightspotcdn.com/dims4/default/7cc218c/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa5%2F69%2Fe639b7ab40c2a290e3296de726d8%2FPersian-AP-PIFN6J-645sm3614.jpg", (long) 999, "Luis", "The Persian cat is a long-haired breed of cat characterized by its round face and short muzzle. It is also known as the \"Persian Longhair\" in the English-speaking countries. In the Middle East region, they are widely known as Iranian cat and in Iran they are known as Shiraz cat."));
        animalRepository.save(new Animal("Fartura", "Panda", (long) 9, "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG", (long) 745, "Diogo", "The giant panda, also known as panda bear or simply panda, is a bear native to south central China. It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body. The name \"giant panda\" is sometimes used to distinguish it from the distantly related red panda. "));
        animalRepository.save(new Animal("Toby", "Wildebeest", (long) 2, "https://upload.wikimedia.org/wikipedia/commons/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg", (long) 120, "Rafaela", "The wildebeest, also called the gnu, is an antelope in the genus Connochaetes. It belongs to the family Bovidae, which includes antelopes, cattle, goats, sheep, and other even-toed horned ungulates."));
        animalRepository.save(new Animal("Zorro", "Giraffe", (long) 14, "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg", (long) 230, "Eduardo", "The giraffe is an African artiodactyl mammal, the tallest living terrestrial animal and the largest ruminant. It is traditionally considered to be one species, Giraffa camelopardalis, with nine subspecies."));
        animalRepository.save(new Animal("Oscar", "Panther", (long) 53, "https://www.oeco.org.br/wp-content/uploads/2019/02/black-panter-San-Diego-Zoo.jpg", (long) 53, "Diogo", "A black panther is the melanistic colour variant of any Panthera, particularly of a leopard in Asia and Africa, or a jaguar in the Americas."));
        animalRepository.save(new Animal("Fred", "Lion", (long) 2, "https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg", (long) 450000, "Luis", "The lion is a species in the family Felidae; it is a muscular, deep-chested cat with a short, rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; male lions have a prominent mane, which is the most recognisable feature of the spe"));
        animalRepository.save(new Animal("Aurora", "Linx", (long) 57, "https://fundacionmundosinfronteras.org/wp-content/uploads/2019/08/Lince-iberico-en-peligro.jpg", (long) 2300000, "Diogo", "The Iberian lynx is a wild cat species native to the Iberian Peninsula in southwestern Europe that is listed as Endangered on the IUCN Red List. It preys almost exclusively on the European rabbit. Wikipedia"));
        animalRepository.save(new Animal("Epica", "Spider", (long) 5, "https://cdn.cnn.com/cnnnext/dam/assets/190808124712-tarantula-migration-colorado-trnd-restricted-large-169.jpg", (long) 100, "Diogo", "Tarantulas comprise a group of large and often hairy spiders belonging to the family Theraphosidae. Currently, about 1,000 species have been identified."));

    }
}
