<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\Response as SymfonyResponse;

class ApiController extends Controller
{
    protected $statusCode = SymfonyResponse::HTTP_OK;

    public function respond($data, $header = [])
    {
        return Response::json($data, $this->getStatusCode(), $header);
    }

    public function respondWithError($message)
    {
        return $this->respond([
            'error' => [
                'message'     => $message,
                'status_code' => $this->getStatusCode()
            ]
        ]);
    }

    public function respondUnauthorized($message = 'unauthorized')
    {
        return $this->setStatusCode(SymfonyResponse::HTTP_UNAUTHORIZED)
            ->respondWithError($message);
    }

    public function respondNoContent($message = 'noContent')
    {
        return $this->setStatusCode(SymfonyResponse::HTTP_NO_CONTENT)
            ->respond($message);
    }

    public function respondForbidden($message = 'forbidden')
    {
        return $this->setStatusCode(SymfonyResponse::HTTP_FORBIDDEN)
            ->respondWithError($message);
    }

    public function respondNotFound($message = 'notFound')
    {
        return $this->setStatusCode(SymfonyResponse::HTTP_NOT_FOUND)
            ->respondWithError($message);
    }

    public function respondInternalError($message = 'internalServerError')
    {
        return $this->setStatusCode(SymfonyResponse::HTTP_INTERNAL_SERVER_ERROR)
            ->respondWithError($message);
    }

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @param mixed $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;

        return $this;
    }
}
