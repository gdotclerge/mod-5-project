class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, jwt: token }, status: 202
    else
      render json: { message: @user.errors.full_messages }, status: 401
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end


  private

  def user_params
    params.require(:user).permit(
      :username,
      :first_name,
      :last_name,
      :email,
      :city,
      :password,
      :password_confirmation,
    )
  end

end
