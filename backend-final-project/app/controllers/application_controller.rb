class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, "sqlit")
  end

  def auth_header
    request.headers["Authorization"]
  end

  def decoded_token
    if auth_header
        token = auth_header.split(" ")[1] #header: {'Authorization': 'Bearer JWTTOKEN'}
        begin
          JWT.decode(token, "sqlit", true, { algorithm: "HS256" })
        rescue JWT::DecodeError
          [{}]
        end
    end
  end

  def current_photographer
    if decoded_token
      photographer_id = decoded_token[0]["photographer_id"]
      @photographer = Photographer.find(photographer_id)
    end
  end

  def logged_in?
    !!current_photographer
  end

  def authorized
    render json: {message: "Please log in"}, status: 401 unless logged_in?
  end

end
