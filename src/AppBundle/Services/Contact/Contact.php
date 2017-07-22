<?php

namespace AppBundle\Services\Contact;

class Contact extends \Twig_Extension
{

    private $twig;
    private $mailer;

    public function __construct(\Swift_Mailer $mailer,\Twig_Environment $twig)
    {
        $this->twig = $twig;
        $this->mailer = $mailer;
    }

    public function sendContactMail($data)
    {

        $message = \Swift_Message::newInstance()->setSubject('Contact')
            ->setFrom('gruffy.thibaut@gmail.com')
            ->setTo(['thibaut.gruffy@gmail.com'])
            ->setBody($this->twig->render(
                'Email/contactMail.html.twig',
                array(
                    'name' => $data['name'],
                    'firstName' => $data['firstName'],
                    'mail' => $data['mail'],
                    'societe' => $data['societe'],
                    'message' => $data['message']
                )
            ),
                'text/html'
            );
        $this->mailer->send($message);
    }
}