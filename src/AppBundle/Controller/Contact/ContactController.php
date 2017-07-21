<?php

namespace AppBundle\Controller\Contact;

use AppBundle\Form\Type\ContactType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ContactController extends Controller
{

    /**
     * @Route("/contact", name="contact")
     * @Method({"GET", "POST"})
     */
    public function contactAction(Request $request)
    {

        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()){
            $data = $form->getData();
            $this->get('app.send_contact_mail')->sendContactMail($data);
            $this->addFlash('success', 'Votre message à bien été envoyé.');
            return $this->redirectToRoute('contact');
        }

        return $this->render('contact/contact.html.twig', array('form' => $form->createView()));
    }
}