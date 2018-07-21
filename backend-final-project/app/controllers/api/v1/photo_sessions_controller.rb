class Api::V1::PhotoSessionsController < ApplicationController

  def index
    if current_user
      @photo_sessions = PhotoSession.all.select { |ps| ps.user_id === current_user.id }
      render json: @photo_sessions
    elsif current_photographer
      @photo_sessions = PhotoSession.all.select { |ps| ps.user_id === current_photographer.id }
      render json: @photo_sessions
    end
  end

  def create
    @photo_session = PhotoSession.new(photo_session_params)
    @photo_session.reserved = true
    if @photo_session.save
      @photogapher = @photo_session.photographer
      render json: { photo_session: @photo_sessions, photographer: @photogapher }
    else
      render json: @photo_session.errors.full_messages, status: 401
    end
  end


  def update
    byebug
  end

  def destroy
    @photo_session = PhotoSession.find(params[:id])
    @photo_session.destroy
    @photo_sessions = PhotoSession.all
    render json: @photo_sessions, status: 202
  end


private

  def photo_session_params
    params.require(:photo_session).permit(
      :session_type,
      :start_date,
      :end_date,
      :address,
      :city,
      :state,
      :zip,
      :additional_notes,
      :user_id,
      :photographer_id,
      :price,
      :hours,
      :min_photos,
      :max_photos,
    )
  end

end
