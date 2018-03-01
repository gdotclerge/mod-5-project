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
      begin
        JWT.decode(auth_header, "sqlit", true, { algorithm: "HS256" })
      rescue JWT::DecodeError
        [{}]
      end
    end
  end

  def current_photographer
    if decoded_token
      if decoded_token[0]["photographer_id"]
        photographer_id = decoded_token[0]["photographer_id"]
        @photographer = Photographer.find(photographer_id)
      end
    end
  end

  def current_user
    if decoded_token
      if decoded_token[0]["user_id"]
        user_id = decoded_token[0]["user_id"]
        @user = User.find(user_id)
      end
    end
  end

  def logged_in?
    !!current_user || !!current_photographer
  end

  def authorized
    render json: {message: "Please log in"}, status: 401 unless logged_in?
  end

end
